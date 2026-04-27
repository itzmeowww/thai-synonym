import data from '@/app/data/synonym.json'

const index = new Map(data.flatMap(group => group.map(word => [word, group])))

export const lookup = (word: string): string[] => index.get(word) ?? []
