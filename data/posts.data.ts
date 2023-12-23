import { defineLoader } from "vitepress"
import Data from "./podcasts.json"

export interface IData {
  _id: string
  No: number
  title: string
  [props: string]: any
}

declare const data: IData[]
export { data }

export default defineLoader({
  // async
  async load(): Promise<IData[]> {
    // await Promise.resolve()
    return Data.data.list
  },
})
