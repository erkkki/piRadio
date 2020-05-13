/*@ngInject*/
export default class AlertController {
    constructor($scope, $timeout) {
        this.name = 'Alert Controller';
        this.$scope = $scope;
        this.$timeout = $timeout;


        this.alerts = [];
        // Time how long alert is showed.
        this.alert_wait_time = 60000;
    }

    $onInit() {
        let self = this;
        this.$scope.$on('alert', function (event,arg) {
            self.addAlert(arg);
        });
    }

    addAlert (msg) {
        let time = new Date();
        let self = this;
        this.alerts.push({ 'message': msg, 'created_time': time});


        // Not real solution, but some kinda deletion for old alerts.
        this.$timeout(function () {
            let time = new Date();
            time.setMilliseconds(time.getMilliseconds() - (self.alert_wait_time - 1000));

            self.alerts.forEach(function (item,index) {
                if(item.created_time < time){
                    self.remove(index);
                }
            })
        }, this.alert_wait_time);
    }

    // Remove alert from array by index.
    remove(alert_index){
        this.alerts.splice(alert_index, 1);
    }
}