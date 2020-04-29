/* @ngInject */
export default class PlayerController {

    // TODO hls support. Now just filtering hls streams out.
    // TODO audio waweform
    // TODO Favorite?

    constructor($rootScope, $scope, $http) {
        this.name = 'Player Controller';
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$http = $http;
        this.audio  = new Audio();
        this.station = {};
        this.volume = 10;
    }

    $onInit() {
        let self = this;
        this.$scope.$on('station', function (event,arg) {
            self.getStationData(arg);
        });
        this.$scope.$watch('$playerctrl.volume', function (newValue, oldValue, scope) {
            self.updateVolume();
        });
    }

    updateVolume () {
        let temp_vol = this.volume / 100;
        temp_vol = temp_vol.toFixed(2);
        this.audio.volume = temp_vol;
    }
    getStationData(station_id) {
        let self = this;
        this.$http.get('/api/radiobrowser/station/byid/'+station_id)
            .then(function (response) {
                let data = JSON.parse(response.data);
                self.updateStation(data[0]);
            });
    }

    updateStation (station_data) {
        this.station = station_data;
        this.audio.pause();
        this.audio = null;
        this.startPlayback();
    }

    pause (){
        if(this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    mute (){
        this.audio.muted = !this.audio.muted;
    }

    startPlayback () {
        self = this;
        this.audio = new Audio();
        this.audio.src = this.station.url_resolved;
        let playPromise = this.audio.play();

        /** Handles all errors from audio element and sending msg about it to alert system
         *  so user can know something wen't wrong. */

        if (playPromise !== undefined) {
            playPromise.then(function() {

            }).catch(function(error) {
                self.$rootScope.$broadcast('alert', self.station.name + ' error in playback');
                self.$scope.$apply();
            });
        }
        this.audio.volume = 0.1;
    }
}