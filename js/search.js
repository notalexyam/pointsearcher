var dataURL = 'https://spreadsheets.google.com/feeds/list/1g_uZ3Yzsx_jeavSOs9Mo4Y5Vqg2tWLT_48H31oQJK4o/od6/public/values?alt=json'
var demo = new Vue({
    el: '#lookup',
    data: {
        searchString: "",
        jsonMembers: []
    },
    mounted() { 
    var self = this //Ensures the calllback below refers to this app.
    $.getJSON(dataURL, function(data) {
      self.jsonMembers = data.feed.entry;
    });
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredMembers: function () {
            var members_array = this.jsonMembers,
                searchString = this.searchString;

            if(!searchString){
                return members_array;
            }

            searchString = searchString.trim().toLowerCase();

            members_array = members_array.filter(function(item){
                if(item.gsx$name.$t.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return members_array;;
        }
    }
});