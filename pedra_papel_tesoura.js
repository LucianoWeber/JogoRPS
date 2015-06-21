/**
 * Jogo "pedra, papel ou tesoura"
 * @author Luciano Weber
 */
function PedraPapelTesoura()
{
    // Opcao escolhida pelo jogador
    var op_player = 0;
    // Opcao escolhida pelo PC (random)
    var op_pc = 0;

    // Pontuacoes
    var pts_player = 0;
    var pts_pc = 0;

    // Contador de rodada
    var rodada = 1;

    // Boas vindas
    alert("Bem vindo ao jogo Pedra, Papel ou Tesoura!");

    // Inicia o loop_playerdo jogo (3=sair)
    while ( op_player != 3 )
    {
        // Da a barbada pro jogador
        op_player = prompt("Opcoes:\n0-Pedra, 1-Papel, 2-Tesoura, 3-Sair do jogo\nDigite uma opcao: ");

        // "sorteia" uma opcao pro PC
        op_pc = Math.round((Math.random()*3));

        // Exibe na tela qual voce escolheu
        if ( op_player == 0 ) { alert("Voce: Pedra!"); }
        else if ( op_player == 1 ) { alert("Voce: Papel!"); }
        else if ( op_player == 2 ) { alert("Voce: Tesoura!"); }
        else
        {
            continue;
        }
        
        // Exibe na tela qual o PC escolheu
        if ( op_pc == 0 ) { alert("PC: Pedra!"); }
        else if ( op_pc == 1 ) { alert("PC: Papel!"); }
        else if ( op_pc == 2 ) { alert("PC: Tesoura!"); }
        else
        {
            continue;
        }

        // Empate
        if ( op_player == op_pc )
        {
            alert("Empate!");
        }
        // Player escolheu pedra
        if ( op_player == 0 )
        {
            // PC escolheu papel
            if ( op_pc == 1 )
            {
                alert("Voce perdeu, pedra e embrulhada por papel!");
                pts_pc++;
            }
            // PC escolheu tesoura
            if ( op_pc == 2 )
            {
                alert("Voce ganhou, pedra esmaga tesoura!");
                pts_player++;
            }
        }
        // Player escolheu papel
        if ( op_player == 1 )
        {
            // PC escolheu pedra
            if ( op_pc == 0 )
            {
                alert("Voce ganhou, papel embrulha pedra!");
                pts_player++;
            }
            // PC escolheu tesoura
            if ( op_pc == 2 )
            {
                alert("Voce perdeu, papel e cortado por tesoura!");
                pts_pc++;
            }
        }
        // Player escolheu tesoura
        if ( op_player == 2 )
        {
            // PC escolheu pedra
            if ( op_pc == 0 )
            {
                alert("Voce perdeu, tesoura e esmagada por pedra!");
                pts_pc++;
            }
            // PC escolheu papel
            if ( op_pc == 1 )
            {
                alert("Voce ganhou, tesoura corta papel!");
                pts_player++;
            }
        }

        // Fim da rodada
        alert("Rodada "+rodada+":\nVoce "+pts_player+" vs "+pts_pc+" PC");
        rodada++;
    }

    // Fim de jogo
    alert("Fim de jogo.\nRodada "+rodada+":\nVoce "+pts_player+" vs "+pts_pc+" PC");
}