```mermaid
    flowchart TB
    Start([Wait for time to be input])
    St1(Wait for submit to be pressed)
    Start-->St1-->St2-->St3-->Dec1
    St2(make loop with # of sec itterations)
    St3(make sec variable = to # of sec)
    Dec1{i=0}
    D1y(counter finished)
    D1n(print i)
     D1n2(i--)
     D1n3(delay one sec)
    Dec1-->|yes| D1y-->D1y2-->End
    Dec1-->|no| D1n-->D1n2-->D1n3--> Dec1
    D1y2(play buzzer sound and wait for new submission)
    End([Turn off and wait for new submission])
    