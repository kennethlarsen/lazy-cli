import Reflux from 'reflux';

import actions from 'yousee/sales/flux/actions/domain/actions.js';

export default class store extends Reflux.Store {
    constructor() {
        super();
        this.listenables = [actions];
    }
}

