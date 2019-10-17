import { __decorate } from "tslib";
import { subscriberCollection, } from '@aurelia/runtime';
// TODO: handle file attribute properly again, etc
/**
 * Observer for non-radio, non-checkbox input.
 */
let ValueAttributeObserver = class ValueAttributeObserver {
    constructor(lifecycle, flags, handler, obj, propertyKey) {
        this.lifecycle = lifecycle;
        this.handler = handler;
        this.obj = obj;
        this.propertyKey = propertyKey;
        this.currentValue = '';
        this.oldValue = '';
        this.hasChanges = false;
        this.priority = 12288 /* propagate */;
        this.persistentFlags = flags & 805306383 /* targetObserverFlags */;
    }
    getValue() {
        return this.currentValue;
    }
    setValue(newValue, flags) {
        this.currentValue = newValue;
        this.hasChanges = newValue !== this.oldValue;
        if ((flags & 4096 /* fromBind */) > 0 || this.persistentFlags === 268435456 /* noTargetObserverQueue */) {
            this.flushRAF(flags);
        }
        else if (this.persistentFlags !== 536870912 /* persistentTargetObserverQueue */) {
            this.lifecycle.enqueueRAF(this.flushRAF, this, this.priority, true);
        }
    }
    flushRAF(flags) {
        if (this.hasChanges) {
            this.hasChanges = false;
            const { currentValue, oldValue } = this;
            this.oldValue = currentValue;
            if (currentValue == void 0) {
                this.obj[this.propertyKey] = '';
            }
            else {
                this.obj[this.propertyKey] = currentValue;
            }
            if ((flags & 4096 /* fromBind */) === 0) {
                this.callSubscribers(currentValue, oldValue, flags);
            }
        }
    }
    handleEvent() {
        const oldValue = this.oldValue = this.currentValue;
        const currentValue = this.currentValue = this.obj[this.propertyKey];
        if (oldValue !== currentValue) {
            this.oldValue = currentValue;
            this.callSubscribers(currentValue, oldValue, 131072 /* fromDOMEvent */ | 524288 /* allowPublishRoundtrip */);
        }
    }
    subscribe(subscriber) {
        if (!this.hasSubscribers()) {
            this.handler.subscribe(this.obj, this);
            this.currentValue = this.oldValue = this.obj[this.propertyKey];
        }
        this.addSubscriber(subscriber);
    }
    unsubscribe(subscriber) {
        this.removeSubscriber(subscriber);
        if (!this.hasSubscribers()) {
            this.handler.dispose();
        }
    }
    bind(flags) {
        if (this.persistentFlags === 536870912 /* persistentTargetObserverQueue */) {
            this.lifecycle.enqueueRAF(this.flushRAF, this, this.priority);
        }
    }
    unbind(flags) {
        if (this.persistentFlags === 536870912 /* persistentTargetObserverQueue */) {
            this.lifecycle.dequeueRAF(this.flushRAF, this);
        }
    }
};
ValueAttributeObserver = __decorate([
    subscriberCollection()
], ValueAttributeObserver);
export { ValueAttributeObserver };
//# sourceMappingURL=value-attribute-observer.js.map