function service(select)
{
  var service = "#service";
  var wear = "#wear";
  var km = "#km";
  var calculate ="#calculate";
  var output ="#output";

  if (select.selectedIndex == 1)
  {
    $(km).prop('disabled', true);
    $(calculate).prop('disabled', true);
    $(output).empty();
    $(km).val('');
  }
  else if(select.selectedIndex == 0)
  {
    $(km).prop('disabled', false);
    $(calculate).prop('disabled', false);
  }
}

function calculate()
{
  var km =$("#km").val();
  var output;
  var calculate ="#calculate";

  if ((type.selectedIndex == 0) && (km.length == 0))
  {
    output = "Please enter the distance you travelled in kilometers(km) in the box below.";
  }
  else if ((type.selectedIndex == 1) && (km.length == 0))
  {
    output = "Please enter the distance you travelled in kilometers(km) in the box below.";
  }
  else if ((type.selectedIndex == 0) && (km > 2000))
  {
    output = "Full service";
  }
  else if ((type.selectedIndex == 0) && (km > 1500))
  {
    output = "3rd Partial service required.";
  }
  else if ((type.selectedIndex == 0) && (km > 1000))
  {
    output = "2nd Partial service required.";
  }
  else if ((type.selectedIndex == 0) && (km > 500))
  {
    output = "1st Partial service required.";
  }
  else if ((type.selectedIndex == 0) && (km < 500))
  {
    output = "No service required currently";
  }
  else if ((type.selectedIndex == 1) && (km > 1000))
  {
    output = "Full service";
  }
  else if ((type.selectedIndex == 1) && (km > 900))
  {
    output = "3rd Partial service required.";
  }
  else if ((type.selectedIndex == 1) && (km > 600))
  {
    output = "2nd Partial service required.";
  }
  else if ((type.selectedIndex == 1) && (km > 300))
  {
    output = "1st Partial service required.";
  }
  else if ((type.selectedIndex == 1) && (km < 300))
  {
    output = "No service required currently";
  }

  $("#output").html(output);
}

function showResults(duration)
{
  var possibilities;
  var links1;
  var links2;
  var links3;
  var links4;
  var links5;
  var links6;
  var links7;
  var links8;
  var x = document.getElementById("type").selectedIndex;
  var y = document.getElementById("duration").selectedIndex;
  if ((x == 0 ) && (y == 0))
  {
    possibilities = "1. Chain replacement needed";
	links1 = "Browse chains here";
	links2 = links1.link("FAQ.html");
  }
  else if ((x == 0 ) && (y == 1))
  {
    possibilities = "1. Ceramic bearing replacement needed<br>2. Hydraulic brake fluid replacement needed";
	links1 = "Browse ceramic bearing here";
	links2 = links1.link("");
	links3 = "Browse hydraulic brake fluid here";
	links4 = links3.link("");

  }
  else if ((x == 0 ) && (y == 2))
  {
    possibilities = "1. Ceramic bearing replacement needed<br>2. Hydraulic brake fluid replacement needed<br>3. Headset bearing replacement needed<br>4. Hub servicing needed";
	links1 = "Browse ceramic bearing here";
	links2 = links1.link("");
	links3 = "Browse hydraulic brake fluid here";
	links4 = links3.link("");
	links5 = "Browse headset bearing here";
	links6 = links5.link("");
  }
  else if ((x == 0 ) && (y == 3))
  {
    possibilities = "1. Tire, brake/gear cable/housing replacement needed<br>2. Wheel truing needed<br>3. Brake pads replacement needed";
	links1 = "Browse tires here";
	links2 = links1.link("");
	links3 = "Browse brake/gear cable/housing here";
	links4 = links3.link("");
	links5 = "Browse brake pads here";
	links6 = links5.link("");
  }
  else if ((x == 1 ) && (y == 0))
  {
    possibilities = "1. Chain replacement needed";
	links1 = "Browse chains here";
	links2 = links1.link("");
  }
  else if ((x == 1 ) && (y == 1))
  {
    possibilities = "1. Ceramic bearing replacement needed";
	links1 = "Browse ceramic bearing here";
	links2 = links1.link("");
  }
  else if ((x == 1 ) && (y == 2))
  {
    possibilities = "1. Ceramic bearing replacement needed<br>2. Hydraulic brake fluid replacement needed<br>3. Headset bearing replacement needed<br>4. Hub servicing required<br>5. Brake pads replacement needed";
	links1 = "Browse ceramic bearing here";
	links2 = links1.link("");
	links3 = "Browse hydraulic brake fluid here";
	links4 = links3.link("");
	links5 = "Browse headset bearing here";
	links6 = links5.link("");
	links7 = "Browse brake pads here";
	links8 = links7.link("");
  }
  else if ((x == 1 ) && (y == 3))
  {
    possibilities = "1. Tire, brake/gear cable/housing replacement needed<br>2. Wheel truing needed<br>3. Suspension servicing needed";
	links1 = "Browse tires here";
	links2 = links1.link("");
	links3 = "Browse brake/gear cable/housing here";
	links4 = links3.link("");
  }
  $("#possibilities").html(possibilities);
  $("#links2").html(links2);
  $("#links4").html(links4);
  $("#links6").html(links6);
  $("#links8").html(links8);
}

function Maps()
{
  var mapsType;
  var Maps= document.getElementById('Maps');
  if (Maps.selectedIndex == 0)
  {
     mapsType= "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d255248.24782689902!2d103.72599237554476!3d1.6045595324619528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+jb!5e0!3m2!1sen!2smy!4v1502949047608";
  }
  else if (Maps.selectedIndex == 1)
  {
    mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126935.13226119621!2d100.41885930563079!3d6.167851129401655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+Alor+Setar+Kedah!5e0!3m2!1sen!2smy!4v1503076232441";
  }
  else if (Maps.selectedIndex == 2)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d213545.94207652102!2d102.16638069540399!3d5.998268937643784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+kota+bahru!5e0!3m2!1sen!2smy!4v1503076071701";
  }
  else if (Maps.selectedIndex == 3)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d180412.4170745114!2d102.20432934577119!3d2.3054480416130794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+melaka!5e0!3m2!1sen!2smy!4v1503076349902";
  }
  else if (Maps.selectedIndex == 4)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127529.4621375113!2d101.88199447156707!3d2.7283341733576707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+seremban+negeri+sembilan!5e0!3m2!1sen!2smy!4v1503076948402";
  }
  else if (Maps.selectedIndex == 5)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d254806.03107861237!2d103.37197649672302!3d3.734946358947821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+Kuantan+Pahang!5e0!3m2!1sen!2smy!4v1503076683032";
  }
  else if (Maps.selectedIndex == 6)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127263.56864082992!2d101.0819313734414!3d4.59643720228814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+ipoh!5e0!3m2!1sen!2smy!4v1503076845671";
  }
  else if (Maps.selectedIndex == 7)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d89708.21542337256!2d100.16894995014358!3d6.447873102992968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+Kangar+Perlis!5e0!3m2!1sen!2smy!4v1503077052572";
  }
  else if (Maps.selectedIndex == 8)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26720.41495576869!2d100.31075568750609!3d5.4149212481630205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+George+Town+Penang!5e0!3m2!1sen!2smy!4v1503077129482";
  }
  else if (Maps.selectedIndex == 9)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126981.43140652312!2d116.07876483425083!3d5.971348721885532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+kota+kinabalu!5e0!3m2!1sen!2smy!4v1503077207778";
  }
  else if (Maps.selectedIndex == 10)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63814.73033299856!2d110.34403628090652!3d1.5166199857757972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+Kuching+Sarawak!5e0!3m2!1sen!2smy!4v1503077408810";
  }
  else if (Maps.selectedIndex == 11)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d89894.02056445635!2d103.14412184490757!3d5.295127363322987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+kuala+terengganu!5e0!3m2!1sen!2smy!4v1503077750312";
  }
  else if (Maps.selectedIndex == 12)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127483.31485599079!2d101.6705723506928!3d3.1333623812540385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+kuala+lumpur!5e0!3m2!1sen!2smy!4v1503077876929";
  }
  else if (Maps.selectedIndex == 13)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15439.111299825634!2d115.24220210282306!3d5.281723061847447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+victoria%2C+labuan!5e0!3m2!1sen!2smy!4v1503077964836";
  }
  else if (Maps.selectedIndex == 14)
  {
	mapsType="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d65622.16929181533!2d101.67608319975862!3d2.9230885837350686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle+shop+in+putrajaya!5e0!3m2!1sen!2smy!4v1503078196302";
  }
  $('#mapsType').attr('src',mapsType);
}

function frame()
{
	var cm=$("#cm").val();
	var size;
	

	if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm.length == 0))
	{
		size = "Please enter your height into the box below.";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 0) && (cm.length == 0))
	{
		size = "Please enter your height into the box below.";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm.length == 0))
	{
		size = "Please enter your height into the box below.";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 1) && (cm.length == 0))
	{
		size = "Please enter your height into the box below.";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm <=152))
	{
		size = "47-48cm, XX-Small";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm <=160))
	{
		size = "49-50cm, X-Small";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm <=168))
	{
		size = "51-53cm, Small";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm <=175))
	{
		size = "54-55cm, Medium";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm <=183))
	{
		size = "56-58cm, Large";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm <=191))
	{
		size = "58-60cm, X-Large";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm <=198))
	{
		size = "61-63cm, XX-Large";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 0) && (cm >198))
	{
		size = "Please consult an experienced bicycle mechanic for the proper road bike frame size recommendation as this height is not common. Sorry for the inconvenience caused.";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 0) && (cm <=155))
	{
		size = "44-46cm, XX-Small";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 0) && (cm <=160))
	{
		size = "47-49cm, X-Small";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 0) && (cm <=165))
	{
		size = "50-52cm, Small";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 0) && (cm <=172))
	{
		size = "53-55cm, Medium";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 0) && (cm <=180))
	{
		size = "56-57cm, Large";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 0) && (cm >180))
	{
		size = "Please consult an experienced bicycle mechanic for the proper road bike frame size recommendation as this height is not common. Sorry for the inconvenience caused.";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm <=158))
	{
		size = "13-14 inches, X-Small";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm <=168))
	{
		size = "15-16 inches, Small";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm <=178))
	{
		size = "17-18 inches, Medium";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm <=185))
	{
		size = "19-20 inches, Large";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm <=193))
	{
		size = "21-22 inches, X-Large";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm <=198))
	{
		size = "23-24 inches, XX-Large";
	}
	else if ((gender.selectedIndex == 0) && (type.selectedIndex == 1) && (cm >198))
	{
		size = "Please consult an experienced bicycle mechanic for the proper mountain bike frame size recommendation as this height is not common. Sorry for the inconvenience caused.";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 1) && (cm <=158))
	{
		size = "13-14 inches, X-Small";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 1) && (cm <=168))
	{
		size = "15-16 inches, Small";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 1) && (cm <=178))
	{
		size = "17-18 inches, Medium";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 1) && (cm <=185))
	{
		size = "19+ inches, Large";
	}
	else if ((gender.selectedIndex == 1) && (type.selectedIndex == 1) && (cm >185))
	{
		size = "Please consult an experienced bicycle mechanic for the proper mountain bike frame size recommendation as this height is not common. Sorry for the inconvenience caused.";
	}
	$("#size").html(size);
}

function date()
	{
      $( "#datepicker" ).datepicker();
      $("#icon").click(function() 
	  { 
	  $("#datepicker").datepicker( "show" );
	  })
   };