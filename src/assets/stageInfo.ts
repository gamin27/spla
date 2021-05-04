import { ref, Ref } from 'vue'
type StageInfo = {
  id: number
  name: string
}
type StageInfos = StageInfo[]

export const stageInfos: StageInfos = [
  { id: 1, name: 'チョウザメ造船' },
  { id: 2, name: 'ホッケふ頭' },
  { id: 3, name: 'バッテラストリート' },
  { id: 4, name: '海女美術大学' },
  { id: 5, name: 'ガンガゼ野外音楽堂' },
  { id: 6, name: 'コンブトラック' },
  { id: 7, name: 'フジツボスポーツクラブ' },
  { id: 8, name: 'タチウオパーキング' },
  { id: 9, name: 'マンタマリア号' },
  { id: 10, name: 'エンガワ河川敷' },
  { id: 11, name: 'モズク農園' },
  { id: 12, name: 'ハコフグ倉庫' },
  { id: 13, name: 'ミステリーゾーン' },
  { id: 14, name: 'デボン海洋博物館' },
  { id: 15, name: 'アロワナモール' },
  { id: 16, name: 'アジフライスタジアム' },
]

type UseStageInfos = () => {
  stageInfos: Ref<StageInfos>
}

const useStageInfos: UseStageInfos = () => {
  return { stageInfos: ref(stageInfos) }
}

export { useStageInfos, UseStageInfos, StageInfos }
