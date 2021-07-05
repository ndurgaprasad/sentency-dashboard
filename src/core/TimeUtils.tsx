export class TimeUtils {

    static formatTime(timestamp: number): string {
        const date = new Date(timestamp)
        return date.toLocaleString()
    }
}
