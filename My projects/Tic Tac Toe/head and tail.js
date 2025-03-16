function tossCoin(n) {
  Head = 0;
  Tail = 0;
  for (let i = 0; i < n; i++) {
    ranum = parseInt(Math.random() * 2);
    if (ranum == 1) {
      Head++;
    } else {
      Tail++;
    }
  }
  console.log(`For ${n} tosses : `);
  console.log(`Head = ${Head}`);
  console.log(`Tail = ${Tail}`);
  console.log(`Probability of getting head = ${Head / n}`);
  console.log(" ");
}
tossCoin(10);
tossCoin(100);
tossCoin(200);
