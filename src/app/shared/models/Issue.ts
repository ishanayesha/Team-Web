export class Issue {
    jiraId: number;
    theme: string;
    type: string;
    summary: string;
    status: string;
    dev: string;
    qa: string;
    devStart: string;
    devEnd: string;
    qaStart: string;
    qaEnd: string;
    devAnalysis: number;
    devEstimate: number;
    qaAnalysis: number;
    qaEstimate: number;
}