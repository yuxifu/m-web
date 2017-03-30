import { Injectable } from "@angular/core";
import { MockBackend } from "@angular/http/testing";
import { MockBackendSubscriber } from './mock-backend.subscriber';

@Injectable()
export class MockBackendService {
    subcribers: MockBackendSubscriber[] = [];

    constructor(
        private backend: MockBackend,
    ) { }

    // add MockBackendSubscriber
    register(subscriber: MockBackendSubscriber) {
        this.subcribers.push(subscriber);
    }

    // remove existing MockBackendSubscriber
    // NOT working yet. After removing existing MockBackendSubscriber(s), most remove 
    // corresponding endpoints
    unregister(subscriber: MockBackendSubscriber) {
        let index = 0;
        for (let item of this.subcribers) {
            if (subscriber == item) {
                this.subcribers.splice(index, 1);
                break;
            }
            index++;
        }
    }

    // add endpoints
    start(): void {
        for (let subscriber of this.subcribers) {
            subscriber.subscribe(this.backend);
        }
    }
}