const verifyResultController = (req, res) => {
  const resultTeam1 = Number(req.body.score.split("x")[0]);
  const resultTeam2 = Number(req.body.score.split("x")[1]);

  function testScore(teamScore) {
    let combinacoes = 0;
    let i, j, k, l;
    // Calcula a quantidade máxima de touchdowns possível
    let touchdownNumber = Math.floor(teamScore / 6);
    // Calcula a quantidade máxima de field goals possível
    let fieldGoalNumber = Math.floor(teamScore / 3);
    let currentScore;

    for (i = 0; i <= touchdownNumber; i++) {
      for (j = 0; j <= fieldGoalNumber; j++) {
        for (k = 0; k <= i; k++) {
          for (l = 0; l <= i; l++) {
            currentScore = 6 * i + 3 * j + k * 1 + l * 2;
            if (currentScore === teamScore) {
              if (k !== 0 || l !== 0) {
                if (i > k) {
                  combinacoes++;
                }
              } else {
                combinacoes++;
              }
            }
          }
        }
      }
    }

    return combinacoes;
  }

  const totalCombinations = testScore(resultTeam1) * testScore(resultTeam2);

  return res.json({
    combinations: totalCombinations,
  });
};

export { verifyResultController };
