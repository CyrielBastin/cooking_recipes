import type PutRecipeDTO from '../PUT/recipe'

export default interface PatchRecipeDTO extends Partial<PutRecipeDTO> {}
