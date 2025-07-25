function goToVideo(id) {
    // video.html?videoId=... 페이지로 이동
    // 실제로 videoId가 유튜브 ID라면, id 대신 그걸 넣어야 함
    // 여기선 단순 숫자 예시
    location.href = `./pages/video.html?videoId=${id}`;
}

// 1. 강제 새로고침 (캐시 무시)
document.getElementById("reloadBtn").addEventListener("click", function() {
    // 서버에서 다시 로드 (캐시 무시)
    location.reload(true); // 대부분의 최신 브라우저에서 true는 무시됨 (표준 아님)
});

// 2. 일반 새로고침 (캐시 허용)
document.getElementById("refreshBtn").addEventListener("click", function() {
    // 일반 새로고침 (캐시 허용)
    location.reload(); // 기본 false, 브라우저 캐시 사용
});
