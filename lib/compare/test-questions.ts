/**
 * "The Test" — credibility and execution-capacity questions.
 *
 * Readiness questions (r*) apply to every candidate's future proposals.
 * Performance questions (p*) apply to a candidate who currently holds the
 * contested office (an incumbent seeking another term).
 */

export interface TestQuestion {
  id: string;
  question: string;
}

export const READINESS_QUESTIONS: TestQuestion[] = [
  { id: "r1", question: "Is the problem clearly defined?" },
  { id: "r2", question: "Is the solution specific?" },
  { id: "r3", question: "Is there credible evidence supporting the approach?" },
  { id: "r4", question: "Is it financially realistic?" },
  { id: "r5", question: "Is the timeline reasonable?" },
  { id: "r6", question: "Does the politician have the relevant authority?" },
  { id: "r7", question: "Does the plan require legislative support?" },
  { id: "r8", question: "Are the risks and trade-offs disclosed?" },
  { id: "r9", question: "Is the implementation team or capacity known?" },
  { id: "r10", question: "Is there relevant evidence of previous execution?" },
];

export const PERFORMANCE_QUESTIONS: TestQuestion[] = [
  { id: "p1", question: "What conditions were inherited?" },
  { id: "p2", question: "What did they promise?" },
  { id: "p3", question: "What did they implement?" },
  { id: "p4", question: "What changed?" },
  { id: "p5", question: "What did it cost?" },
  { id: "p6", question: "What worked?" },
  { id: "p7", question: "What failed?" },
  { id: "p8", question: "What was outside their control?" },
  { id: "p9", question: "What remains unresolved?" },
  { id: "p10", question: "How did they respond?" },
];

export const ALL_TEST_QUESTION_IDS = new Set(
  [...READINESS_QUESTIONS, ...PERFORMANCE_QUESTIONS].map((q) => q.id)
);
