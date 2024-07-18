import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string]; // Tuple

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchREader {
  constructor(public reader: DataReader) {}

  // .map((row: string[]): MatchData => {
  //   return [
  //     dateStringToDate(row[0]),
  //     row[1],
  //     row[2],
  //     parseInt(row[3]),
  //     parseInt(row[4]),
  //     row[5] as MatchResult, // Type assertions
  //     row[6],
  //   ];
  // });
}