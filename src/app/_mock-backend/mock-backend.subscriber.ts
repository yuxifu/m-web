import { MockBackend } from "@angular/http/testing";

export interface MockBackendSubscriber {
    subscribe(backend: MockBackend);
}