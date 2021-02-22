function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height > 52) ? "You are too short!":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function oldEnoughToVote() {
    var Age, can_vote;
    Age = document.getElementById("Age").Value;
    can_vote = (Age > 17) ? "You are old enough":"Too young";
    document.getElementById("Vote").innerHTML = can_vote + " to vote."
}