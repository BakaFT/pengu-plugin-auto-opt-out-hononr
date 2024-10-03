import * as upl from 'pengu-upl'

export function init(context) {
    upl.init(context)

    upl.hooks.ember.extendClassByMatching((component) => {
        return component.baseClassName === "honor-vote-ceremony-v3"
    }, () => ({
        // to make 2nd param of runTask to be 0 
        beginTransition: function () {
            this.set("selectionChosen", !0),
                (this._beginTransitionTimer = null);
            this.runTask(function () {
                this.submitBallot();
            }, 0);
        },

        willRender: function () {
            this.send("submitSelection")
        }
    }))

}