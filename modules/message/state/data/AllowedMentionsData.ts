import type { AllowedMentionTypesData } from "./AllowedMentionTypeData"

export type AllowedMentionsData = {
    readonly parse?: AllowedMentionTypesData[],
    readonly roles?: string[],
    readonly users?: string[],
}
  