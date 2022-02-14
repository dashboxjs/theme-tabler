import { BASE_COLORS } from "../../../data/colors.data";

export interface ButtonConfig {
    label: string
    type: typeof BUTTON_TYPES[number]
    color: typeof BASE_COLORS[number]
    shape: typeof BUTTON_SHAPES[number]
}

export const BUTTON_TYPES = [
    "btn", "btn-outline", "btn-ghost"
] as const

export const BUTTON_SHAPES = [
    "standard", "square", "pill"
] as const
