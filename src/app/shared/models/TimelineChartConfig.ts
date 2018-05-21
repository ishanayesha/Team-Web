export class TimelineChartConfig {
    avoidOverlappingGridLines : boolean;
    timeline: any[];

    constructor(avoidOverlappingGridLines: boolean, timeline: any[]) {
        this.avoidOverlappingGridLines = avoidOverlappingGridLines;
        this.timeline = timeline;
    }
}