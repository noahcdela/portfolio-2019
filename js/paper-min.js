for(var color="#4764CD",points=2,pathLength=[250,350,10,150],path=new Path({strokeColor:"#4764CD",strokeWidth:80}),start=view.center/[10,1],i=0;i<points;i++)path.add(start+new Point(i*pathLength[0],0));function nextLengthSize(){return i+=1,i%=pathLength.length,pathLength[i]}function onMouseMove(t){path.firstSegment.point=t.point;for(var n=0;n<points-1;n++){var o=path.segments[n],e=o.next,i=o.point-e.point;i.length=pathLength[0],e.point=o.point-i}}function onMouseDown(t){var n;path.clone().position}function onMouseUp(t){}