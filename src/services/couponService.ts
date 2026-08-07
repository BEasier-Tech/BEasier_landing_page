import axios from "axios";

const BASE_URL = "https://api.gestaoboa.com.br";

export interface CouponValidationResult {
  valid: boolean;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  discountAmount: number;
  finalPrice: number;
  finalPriceStr: string;
  message: string;
  error?: string;
}

// Lista de cupons padrão locais (Fallback caso a API backend ainda não esteja acessível)
const LOCAL_COUPONS: Record<string, { type: "percentage" | "fixed"; value: number; description: string }> = {
  "BOA20": { type: "percentage", value: 20, description: "20% OFF em qualquer plano" },
  "GESTAO20": { type: "percentage", value: 20, description: "20% OFF em qualquer plano" },
  "BOA10": { type: "percentage", value: 10, description: "10% OFF em qualquer plano" },
  "GESTAO10": { type: "percentage", value: 10, description: "10% OFF em qualquer plano" },
  "DESCONTO15": { type: "percentage", value: 15, description: "15% OFF em qualquer plano" },
  "BLACKFRIDAY": { type: "percentage", value: 50, description: "50% OFF de desconto especial" },
  "PRIMEIRO20": { type: "fixed", value: 20, description: "R$ 20,00 de desconto" },
};

/**
 * Extrai o valor numérico de uma string de preço (ex: "R$ 89,00/mês" -> 89.0)
 */
export function parsePriceNumber(priceStr: string): number {
  const match = priceStr.replace(/\./g, "").replace(",", ".").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

/**
 * Formata um número para moeda BRL (ex: 71.2 -> "R$ 71,20")
 */
export function formatCurrencyBRL(val: number): string {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/**
 * Valida um cupom de desconto usando a API backend com fallback local
 */
export async function validateCoupon(
  code: string,
  basePriceNum: number,
  planId?: string
): Promise<CouponValidationResult> {
  const cleanCode = code.trim().toUpperCase();

  if (!cleanCode) {
    return {
      valid: false,
      code: "",
      discountType: "percentage",
      discountValue: 0,
      discountAmount: 0,
      finalPrice: basePriceNum,
      finalPriceStr: formatCurrencyBRL(basePriceNum),
      message: "Digite um código de cupom válido.",
      error: "CÓDIGO_VAZIO",
    };
  }

  // Tenta validar na API Backend
  try {
    const response = await axios.post(`${BASE_URL}/coupons/validate`, {
      code: cleanCode,
      plan_id: planId,
      amount: basePriceNum,
    }, { timeout: 3000 });

    if (response.data && response.data.valid) {
      const data = response.data;
      return {
        valid: true,
        code: cleanCode,
        discountType: data.discount_type || "percentage",
        discountValue: data.discount_value || 0,
        discountAmount: data.discount_amount || 0,
        finalPrice: data.final_amount || (basePriceNum - (data.discount_amount || 0)),
        finalPriceStr: formatCurrencyBRL(data.final_amount || (basePriceNum - (data.discount_amount || 0))),
        message: data.message || `Cupom ${cleanCode} aplicado com sucesso!`,
      };
    }
  } catch (error) {
    console.log("Validação via API backend indisponível ou cupom não cadastrado no backend, testando cupons padrão locais...");
  }

  // Fallback local caso o backend não responda ou esteja em ambiente de desenvolvimento
  const localCoupon = LOCAL_COUPONS[cleanCode];
  if (localCoupon) {
    let discountAmount = 0;
    if (localCoupon.type === "percentage") {
      discountAmount = (basePriceNum * localCoupon.value) / 100;
    } else {
      discountAmount = localCoupon.value;
    }

    const finalPrice = Math.max(0, basePriceNum - discountAmount);

    return {
      valid: true,
      code: cleanCode,
      discountType: localCoupon.type,
      discountValue: localCoupon.value,
      discountAmount,
      finalPrice,
      finalPriceStr: formatCurrencyBRL(finalPrice),
      message: `Cupom ${cleanCode} aplicado: ${
        localCoupon.type === "percentage" ? `${localCoupon.value}% OFF` : `R$ ${localCoupon.value},00 OFF`
      }!`,
    };
  }

  return {
    valid: false,
    code: cleanCode,
    discountType: "percentage",
    discountValue: 0,
    discountAmount: 0,
    finalPrice: basePriceNum,
    finalPriceStr: formatCurrencyBRL(basePriceNum),
    message: `Cupom "${cleanCode}" é inválido ou expirou.`,
    error: "CUPOM_INVALIDO",
  };
}
