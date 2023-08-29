function solution(a, b, n) {
    // 현재 남아 있는 콜라의 병 개수가 a보다 작은 경우
    if (n < a) {
    	// a가 더 큰 경우, 0이 최종적으로 합산
        return 0;
    } 
    else {
    	// 빈 병을 가져다주고 받는 콜라의 병 갯수
        let sum = Math.floor(n / a) * b;
        
         
        //계산한 콜라의 개수를 재귀 함수를 통해 계속 누적해서 더해준다.
        
        return sum + solution(a, b, n % a + sum);
    }
}