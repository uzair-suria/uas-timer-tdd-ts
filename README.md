<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
  }
  th {
    text-transform: uppercase
  }
  td {
    text-align: left
  }
  .wireframe-container {
    border: 1px solid grey;
    padding: 20px;
    height: 150px;
    display: flex;
    max-width: 300px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
  }
  .timer-display {
    width: 100%;
    text-align: center;
    font-size: 5rem
  }
  .timer-controls > .btn{
    margin: 10px;
    width: 75px;
    text-transform: uppercase;
    background-color: #3f51b5;
    border: none;
    color: #eceff1;
  }
</style>

# TEST DRIVEN DEVELOPMENT: REACT TIMER APP

## Epic and User Story

<table>
    <thead>
        <tr>
            <th>Epic</th>
            <th>User Story</th>
            <th>Acceptance Criteria</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan=3>Develop a Timer App</td>
        <td rowspan=1>Start timer to initiate count down</td>
        <td>
          User is able to:
          <ul>
            <li>start the timer</li>
            <li>see the timer countdown</li>
          </ul>
          Counting down the time should not be interrupted even if the user clicks the start button more than once.        
        </td>
      </tr>
      <tr>
        <td>
          Stop/Pause the timer so that countdown is applied only when needed
        </td>
        <td>
          User is able to:
          <ul>
            <li>stop the timer</li>
            <li>see the timer stopped</li>
          </ul>
          Once the timer is stopped, nothing should happen when the user clicks the stop button again
        </td>
      </tr>
      <tr>
        <td>
          Reset the timer so that countdown can begin from start
        </td>
        <td>
          User is able to:
          <ul>
            <li>reset the timer</li>
            <li>see the timer reset to default</li>
          </ul>
        </td>
      </tr>
    </tbody>
</table>

## Wireframe

<div class="wireframe-container">
  <div class="timer-display" >
    <span class="timer" >00:00</span>
  </div>
  <div class="timer-controls" >
    <button class="btn">Start</button>
    <button class="btn">Stop</button>
    <button class="btn">Reset</button>
  </div>
</div>
