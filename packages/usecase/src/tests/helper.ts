import { Reports } from 'report-rendezvous-domain'

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
