import { Reports } from 'report-rendezvous-domain'

export function TODO() {
  throw new Error('An operation is not implemented')
}

export const Helper = {
  factoryReport: (length: number): Reports => {
    return Array.from({ length }, (_, i) => i + 1).map((i) => {
      return {
        id: `id${i}`,
        meta: {
          title: `title${i}`,
          thumbnail: `thumbnail${i}`
        }
      }
    })
  }
}
