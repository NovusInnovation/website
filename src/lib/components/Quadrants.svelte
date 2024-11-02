<script>
    import { onMount } from 'svelte';
  
    let localTime;
    const timeZone = 'Europe/Copenhagen'; // Change this to your desired timezone
  
    function updateTime() {
      const now = new Date();
      const options = {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      localTime = new Intl.DateTimeFormat('en-US', options).format(now);
    }

    
  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval);
  });
  </script>
  
  <style>
    .container {
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: 60vh; /* Full viewport height */
      width: 60vw;  /* Full viewport width */
    }
  
    .quadrant {
      border: 1px solid #ccc; /* Optional styling */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em; /* Adjust font size as needed */
    }
    .time {
    font-size: 3vh;
    text-align: center;
    margin-top: 20px;
  }
  
    .quadrant:nth-child(1) { background-color: #2f317a; }
    .quadrant:nth-child(2) { background-color: #24114f; }
    .quadrant:nth-child(3) { background-color: #38114f; }
    .quadrant:nth-child(4) { background-color: #300947; }
  </style>
  
  <div class="container">
    <div class="quadrant">Jonathan

    </div>
    <div class="quadrant">Eliot</div>
    <div class="quadrant"> Aron             {localTime}
    </div>
    <div class="quadrant">Johannes             {localTime}
    </div>

  </div>
  