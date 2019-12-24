import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCSV('football.csv')
matchReader.load()

const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches)
