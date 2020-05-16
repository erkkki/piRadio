/* @ngInject */
export default class PlayerController {

    // TODO hls support. Now just filtering hls streams out.

    constructor($scope, initVolume, RadioApi) {
        this.name = 'Player Controller';
        this.$scope = $scope;
        this.RadioApi = RadioApi;


        this.audio  = new Audio();
        this.station = {'favicon': 'default-image.png'};
        this.volume = initVolume;
    }

    $onInit() {
        let self = this;

        // Listens when user changes station.
        this.$scope.$on('station', function (event,station_id) {

            // Load station data from api.
            self.RadioApi.getStationById(station_id).then(function (response) {
                let data = JSON.parse(response.data);
                self.startPlayback(data[0]);
            })
        });

        // Listens volume slider value.
        this.$scope.$watch('$player.volume', function (newValue, oldValue, scope) {
            self.updateVolume();
        });
    }

    updateVolume () {
        let temp_vol = this.volume / 100;
        temp_vol = temp_vol.toFixed(2);
        this.audio.volume = temp_vol;
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

    startPlayback (station_data) {
        self = this;
        this.audio.pause();
        this.audio = null;

        this.station = station_data;
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