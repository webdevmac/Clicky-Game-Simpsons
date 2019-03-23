import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import FriendsCard from "../FriendsCard/FriendsCard.js";
import friends from "../../friends.json"
import Scoreboard from "../Scoreboard/Scoreboard.js";

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class Game extends React.Component {

  state = {
    showAlert: 0,
    showSuccess: 0,
    score: 0,
    topScore: 0,
    friends,
    clickedfriends: [],
  };

  clickedImage =id =>{
    console.log(this.state.clickedfriends);
    const clickedfriends = this.state.clickedfriends;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({showAlert: 0});

    // if the clicked image has an id of the indexed images
    if (clickedfriends.indexOf(id) === -1) {
      // push that id into the array to be stored
      clickedfriends.push(id);
      console.log(clickedfriends);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (score === 12) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedfriends: []
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedfriends: []
      });
      console.log("duplicate");
      
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };


  handleIncrement = () => {

    this.setState({ score: this.state.score + 1 });
  };

   // shuffle up images
   makeShuffle = () => {
    this.setState({ friends: shuffle(friends) });
  };

  render() {
    return (
      <div>
        <Scoreboard
          title="Simpsons Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <Wrapper>

          {this.state.friends.map(friend => (
            <FriendsCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              clickedImage={this.clickedImage}

            />
          ))}
        </Wrapper>
      </div>
    );
  }
  }

export default Game;
