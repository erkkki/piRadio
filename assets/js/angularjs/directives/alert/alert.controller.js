/*@ngInject*/
export default class AlertController {
    constructor($scope) {
        this.name = 'Alert Controller';
        this.$scope = $scope;
        this.alerts = [];
    }

    $onInit() {
        let self = this;
        this.$scope.$on('alert', function (event,arg) {
            self.addAlert(arg);
        });
    }

    addAlert (msg) {
        this.alerts.push({ 'message': msg});
    }

    remove(alert_index){
        this.alerts.splice(alert_index, 1);
    }

}