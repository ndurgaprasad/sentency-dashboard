import {makeAutoObservable, runInAction} from "mobx";
import {QueueService} from "../../network/service/QueueService";
import {QueueLocalization} from "../model/QueueLocalization";

export class QueueStore {

    fullLocalizationsList: QueueLocalization[] = [];

    constructor() {
        makeAutoObservable(this)
        this.loadQueuedLocalizations()
    }

    async loadQueuedLocalizations() {
        const localizations = await QueueService.getQueuedLocalizations()
        runInAction(() => {
            this.fullLocalizationsList = localizations
        })
    }

    async acceptLocalization(id: string) {
        const response = await QueueService.applyLocalization(id)
        if (response.success) {
            this.loadQueuedLocalizations()
        }
    }

    async declineLocalization(id: string) {
        const response = await QueueService.dropLocalization(id)
        if (response.success) {
            this.loadQueuedLocalizations()
        }
    }
}
