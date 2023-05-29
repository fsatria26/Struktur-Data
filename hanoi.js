//fungsi menara hanoi dimanan ada n piringan, tiang sumber , tiang bantu dan tiang tujuan
function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
  }
  
  // Contoh pemanggilan fungsi untuk menara Hanoi dengan 3 disk
  const n = 3;
  const source = 'tiang sumber';
  const auxiliary = 'tiang bantu';
  const destination = 'tiang tujuan';
  
  towerOfHanoi(n, source, auxiliary, destination);
  