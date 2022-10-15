import React from "react"
import { Link } from "gatsby"

function HighlightDay() {
  return (
    <>
      <div className="container my-3 mb-lg-5 col-lg-8">
        <div className="row text-left justify-content-start">
          <h2 className="bold h1 text-center">Day 1</h2>
          <p>
            The tournament started at arguably the nicest course of the weekend,{" "}
            <a
              className="underline"
              href="https://gulllakeview.com/golf/stoatin-brae/"
            >
              Stoatin Brae
            </a>
            . The first nine holes was 1 best ball.
          </p>

          <h3>Round 1.1 - 1 Best Ball</h3>

          <p>
            <Link to="/players/dylan" className="blue underline">
              Dylan
            </Link>{" "}
            and{" "}
            <Link to="/players/rj" className="blue underline">
              RJ
            </Link>{" "}
            surprisingly fell behind against{" "}
            <Link to="/players/matt" className="green underline">
              Matt
            </Link>{" "}
            and{" "}
            <Link to="/players/gordon" className="green underline">
              Gordon
            </Link>{" "}
            and could not recovery, giving the first point to Green with a 4&3
            victory early. The other two matches came down to the last hole with{" "}
            <Link to="/players/craig" className="blue underline">
              Craig
            </Link>{" "}
            and{" "}
            <Link to="/players/dan" className="blue underline">
              Dan
            </Link>{" "}
            beating{" "}
            <Link to="/players/curtis" className="green underline">
              Curtis
            </Link>{" "}
            and{" "}
            <Link to="/players/jake" className="green underline">
              Jake
            </Link>
            , sealing the full point for Blue.{" "}
            <Link to="/players/travis" className="green underline">
              Travis
            </Link>{" "}
            and{" "}
            <Link to="/players/derek" className="green underline">
              Derek
            </Link>{" "}
            got 1 more point for the Green Team against{" "}
            <Link to="/players/cam" className="blue underline">
              Cam
            </Link>{" "}
            and{" "}
            <Link to="/players/evan" className="blue underline">
              Evan
            </Link>
            .
          </p>
          <p>
            After Round 1.1, it was{" "}
            <span className="bold green">2-1 Green Team.</span>
          </p>

          <h3>Round 1.2 - 2 Best Ball</h3>

          <p>
            Round 1.2 was the second half of Stoatin Brae and the game-play was
            2 best ball. In this format, the ball from each player are used and
            totaled. The lower totaled score wins.
          </p>

          <p>
            After a slight rotation of the carts, the first match still found
            the captains facing each other. Matt came out on top again. Another
            point for the Green.
          </p>
          <p>
            In perhaps the match of the weekend, RJ and Evan found themselves
            down 4 points with 5 holes to play against Gordon and Derek. In an
            absolute thriller, down to the wire, RJ and Evan rallied and won 5
            straight holes to seal the victory.
          </p>
          <p>
            After a lost score card, we don't know the individual scores, but
            Travis and Jake beat Cam and Craig to take 1 more point for Green.
          </p>
          <p>
            After the first 18 holes,{" "}
            <span className="bold green">Green leads 4 points to 2.</span>
          </p>

          <h3>Round 2.1 - 2 Ball Bramble</h3>

          <p>
            For the second 18, the groups scooted on over to another Gull Lake
            View golf course,{" "}
            <a
              className="underline"
              href="https://gulllakeview.com/golf/golf-courses/stonehedge-south/"
            >
              Stonehedge South
            </a>
            . With a rating of 72.7 and slope of 133, it might be the most
            difficult course of the weekend.
          </p>
          <p>Two of the three matches were nail-biters.</p>
          <p>
            Gordon and Travis can't find a way to score on the last hole and
            lose by one to RJ and Craig.
          </p>
          <p>
            Jake and Derek vs Dylan and Cam ended in a tie, but every hole
            besides #9 was scored. This was an exciting match that ended in
            All-Square.
          </p>
          <p>
            Winning 5 straight holes is something we hadn't seen in the BFBH
            Cup, until today, and we saw it twice. Once with RJ and Evan's
            come-from-behind victory and the other time was this match with Matt
            and Curtis winning 5 straight holes against Evan and Dan.
          </p>
          <p>
            <span className="block bold green">Green Team - 5.5</span>
            <span className="block bold blue">Blue Team - 3.5</span>
          </p>
          <h3>Round 2.2 - Scramble</h3>
          <p>
            The second half of Stonehedge South, the wheels fell off for Blue.
            They lost every match on the back nine.
          </p>
          <p>
            Gordon and Jake with a 3&2 victory over Cam and Craig. Travis and
            Matt was 2&1 over Dan and RJ. Dylan and Evan concede on the fifth
            hole against Derek and Curtis (final score 4&3).
          </p>
          <p>
            After day 1 and 12 matches later, the score is:
            <span className="block bold green">Green Team - 8.5</span>
            <span className="block bold blue">Blue Team - 3.5</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default HighlightDay
