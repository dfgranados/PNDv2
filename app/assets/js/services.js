'use strict';

angular.module('classDataService', [])

/*RETRIVE CLASS INFORMATION*/
.factory('classesFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var classes = [
  /*monday*/
    {yogaType: 'hot power hour', time:'5 pm' , studio: 'the Studio DC', location:'Dupont Circle', year:"2014", month:"11" , day: 4, repeat:1, coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm', color:'#833D85'  },
    {yogaType: 'hot vinyasa 1.5', time:'6:15 pm' , studio: 'the Studio DC', location:'Dupont Circle', year:"2014", month:"11" , day: 4, repeat:1 , coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm', color:'#833D85'  },
    /*tuesday*/
    {yogaType: 'power yoga', time:'9:45 am' , studio: 'Sport & Health Regency', location:'Tyson\'s', year:"2014", month:"11" , day: 4, repeat:2 , coordinates:'', link:'http://www.sportandhealth.com/locations/virginia-clubs/regency', color:'#009D34'  },
    {yogaType: 'hot power yoga 2', time:'12 pm' , studio: 'the Studio DC', location:'Dupont Circle', year:"2014", month:"11" , day: 4, repeat:2 , coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm', color:'#833D85'  },
    /*wendesday*/
    {yogaType: 'vinyasa flow', time:'9:45 am' , studio: 'Sport & Health Regency', location:'Tyson\'s', year:"2014", month:"11" , day: 4, repeat:3 , coordinates:'', link:'http://www.sportandhealth.com/locations/virginia-clubs/regency', color:'#009D34' },
    {yogaType: 'vinyasa', time:'6 pm' , studio: 'East Meets West', location:'Vienna', year:"2014", month:"11" , day: 4, repeat:3 , coordinates:'', link:'https://clients.mindbodyonline.com/classic/home?studioid=13672', color:'#F20000'  },
    {yogaType: 'vinyasa basics', time:'7:30 pm' , studio: 'East Meets West', location:'Vienna', year:"2014", month:"11" , day: 4, repeat:3 , coordinates:'', link:'https://clients.mindbodyonline.com/classic/home?studioid=13672' , color:'#F20000' },
    /*thursday*/
    {yogaType: 'hot power yoga', time:'12 pm' , studio: 'the Studio DC', location:'Dupont Circle', year:"2014", month:"11" , day: 4, repeat:4, coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm', color:'#833D85'  },
    {yogaType: 'gentle vinyasa flow', time:'6:45 pm' , studio: 'the Studio DC', location:'Adam\'s Morgan', year:"2014", month:"11" , day: 4, repeat:4, coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm', color:'#FFC000'  },
    {yogaType: 'hot power vinyasa 2', time:'8 pm' , studio: 'the Studio DC', location:'Adam\'s Morgan', year:"2014", month:"11" , day: 4, repeat:4, coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm', color:'#FFC000'  },
    /*friday*/
    {yogaType: 'hot vinyasa 1.5', time:'6:30 am' , studio: 'the Studio DC', location:'Adam\'s Morgan', year:"2014", month:"11" , day: 4, repeat: 5 , coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm', color:'#FFC000'  },
    /*saturday*/
    {yogaType: 'no classes today!', time:'' , studio: '', location:'', year:"2014", month:"11" , day: 4, repeat: 6 , coordinates:'', link:'' },
    /*sunday*/
    {yogaType: 'hot vinyasa 1.5', time:'4:30 pm' , studio: 'the Studio DC', location:'Dupont Circle', year:"2014", month:"11" , day: 4, repeat: 0, coordinates:'', link:'http://www.thestudiodc.com/yogaschedulelevels.htm' , color:'#833D85'  }
    /*other*/


  ];

  return {
    all: function() {
      return classes;
    },
    get: function(classId) {
      // Simple index lookup
      return classes[classId];
    }
  };
});

/*Handle date and time information*/
angular.module('dateTimeService', [])
.factory('dateTimeFactory', function() {
  
  return {
       all: function() {
            return "this will do date time info";
          },
        dayAsText: function (index)
          {
            var now = moment();
            var dateText = now.add(index, 'days').format("dddd, MMMM DD");
            return dateText;
          },
       currentMonth: function (index)
          {
            var now = moment();
            var month = now.add(index, 'days').format("MM");
            return month;
          },
         currentDay: function (index)
          {
            var now = moment();
            var day = now.add(index, 'days').format("D");
            return day;
          },
         currentDayOfWeek: function (index)
          {
            var now = moment();
            var day = now.add(index, 'days').format("d");
            return day;
          }
  };
});



