import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import logoPrincipal from "../../assets/logocadastro.png";
import logoCadastro from "../../assets/logoprincipal-Photoroom.png";
 
const CadastroUsuario: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
 
    const [loading, setLoading] = useState<boolean>(false);
    const [erro, setErro] = useState<string>('');
    const [sucesso, setSucesso] = useState<string>('');
 
    const navigate = useNavigate();
 
    const handleCadastro = (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');
        setSucesso('');
 
        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem. Tente novamente!');
            return;
        }
 
        setLoading(true);
        const dados = { username, email, senha };
        console.log("Dados prontos para enviar à API do Node.js:", dados);
 
        setTimeout(() => {
            setSucesso('Cadastro realizado com sucesso!');
            setLoading(false);
            // Limpa os campos após o sucesso
            setUsername('');
            setEmail('');
            setSenha('');
            setConfirmarSenha('');
 
            // Redireciona para o login
            setTimeout(() => navigate('/loginUsuario'), 1500);
        }, 1500);
    };
 
    return (
        <div className="container-fluid min-vh-100" style={{ backgroundColor: '#fdfbf7', color: '#333' }}>
            <div className="row min-vh-100">
                <div className="col-md-6 d-flex justify-content-center align-items-center py-5">
                    <div className="cont-cadastro w-100" style={{ maxWidth: '450px' }}>
 
                        <section className="cont-logo text-center mb-4">
                            <img src={logoPrincipal} alt="Logo Bolo Encantado" className="img-fluid mb-2" style={{ maxWidth: '200px' }} />
                            <h3 className="fw-bold mt-2" style={{ color: '#800000', fontFamily: 'serif' }}>Crie sua conta</h3>
                        </section>
 
                        {erro && <div className="alert alert-danger alert-custom alert-dismissible fade show" role="alert">{erro}</div>}
                        {sucesso && <div className="alert alert-success alert-custom alert-dismissible fade show" role="alert">{sucesso}</div>}
 
                        <form onSubmit={handleCadastro}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label text-muted small fw-semibold">Nome de Usuário</label>
                                <input type="text" id="username" className="form-control input-elegante" placeholder="Como quer ser chamado?" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
 
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-muted small fw-semibold">E-mail</label>
                                <input type="email" id="email" className="form-control input-elegante" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
 
                            <div className="row mb-4">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <label htmlFor="senha" className="form-label text-muted small fw-semibold">Senha</label>
                                    <input type="password" id="senha" className="form-control input-elegante" placeholder="Crie uma senha" value={senha} onChange={(e) => setSenha(e.target.value)} required minLength={6} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="confirmar_senha" className="form-label text-muted small fw-semibold">Confirmar Senha</label>
                                    <input type="password" id="confirmar_senha" className="form-control input-elegante" placeholder="Repita a senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                                </div>
                            </div>
 
                            <div className="d-grid gap-3 mt-4">
                                <button type="submit" className="btn btn-primario-elegante py-2 fw-bold" disabled={loading}>
                                    {loading ? 'Cadastrando...' : 'Cadastrar'}
                                </button>
 
                                <div className="text-center mt-2">
                                    <span className="text-muted small">Já possui uma conta? </span>
                                    <Link to="/loginusuario" className="text-decoration-none fw-bold" style={{ color: '#800000' }}>
                                        Faça login aqui.
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
 
                <div className="col-md-6 bg-dark d-none d-md-flex justify-content-center align-items-center p-0" style={{ overflow: 'hidden' }}>
                    <img src={logoCadastro} alt="Confeitaria" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 0.9 }} />
                </div>
            </div>
        </div>
    );
};
 
export default CadastroUsuario;