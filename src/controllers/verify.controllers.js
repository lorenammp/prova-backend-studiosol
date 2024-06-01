const verifyResultController = (req, res) => {
  const resultTeam1 = Number(req.body.score.split("x")[0]);
  const resultTeam2 = Number(req.body.score.split("x")[1]);

  function testScore(teamScore) {
    let combinacoes = 0;
    // Cada uma das variáveis abaixo, representa um tipo de ponto possível:
    // i = touchdown
    // j = field goal
    // k = extra touchdown de 1 ponto
    // l = extra toucdown de 2 pontos
    let i, j, k, l;
    // Calcula a quantidade máxima de touchdowns possível
    let touchdownNumber = Math.floor(teamScore / 6);
    // Calcula a quantidade máxima de field goals possível
    let fieldGoalNumber = Math.floor(teamScore / 3);
    let currentScore;

    // Optei por utilizar laços para n vezes, sendo n a quantidade
    // máxima de pontos daquele tipo que podem ter sido feitos
    for (i = 0; i <= touchdownNumber; i++) {
      for (j = 0; j <= fieldGoalNumber; j++) {
        // Os dois laços abaixos calculam, respectivamente,
        // um extra touchdown de 1 ponto e 1 extra touchdown de 2 pontos.
        // Para cada extra touchdown, é necessário ter havido pelo menos
        // 1 touchdown, por este motivo os dois laços abaixo iteram apenas
        // i vezes, sendo i o número atual de touchdowns
        for (k = 0; k <= i; k++) {
          for (l = 0; l <= i; l++) {
            currentScore = 6 * i + 3 * j + k * 1 + l * 2;

            if (currentScore === teamScore) {
              // A condidicional abaixo verifica se houve um extra touchdown
              // de um ou 2 pontos.
              if (k !== 0 || l !== 0) {
                // Caso a condição acima seja verdadeira, ou seja, caso
                // exista um extra touchdown, é necessário fazer uma outra
                // validação, onde se verifica se o número de touchdowns
                // é maior que o número de extra touchdowns, garantindo
                // que um extra touchdown só poderá existir se houver ao
                // menos um touchdown
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
