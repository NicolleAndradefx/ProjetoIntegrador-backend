import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginUsuario.css';
import logoPrincipal from "../../assets/logocadastro.png";
import logoCadastro from "../../assets/logoprincipal-Photoroom.png";
 
const LoginUsuario: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [erro, setErro] = useState<string>('');
    const [sucesso, setSucesso] = useState<string>('');
 
    const navigate = useNavigate();
 
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');
        setSucesso('');
        setLoading(true);
 
        const dados = { username, senha };
        console.log("Dados de login prontos para enviar à API:", dados);
 
        // Simulação da resposta da API
        setTimeout(() => {
            setSucesso('Login realizado com sucesso! Redirecionando...');
            setLoading(false);
 
            // Após o sucesso, redireciona o usuário para a Dashboard do Admin
            setTimeout(() => {
                navigate('/admin');
            }, 1500);
        }, 1500);
    };
 
    return (
        <div className="container-fluid min-vh-100" style={{ backgroundColor: '#fdfbf7', color: '#333' }}>
            <div className="row min-vh-100">
                <div className="col-md-6 d-flex justify-content-center align-items-center py-5">
                    <div className="cont-cadastro w-100" style={{ maxWidth: '420px' }}>
 
                        <section className="cont-logo text-center mb-4">
                            <img src={logoPrincipal} alt="Logo Confeitaria" className="img-fluid mb-2" style={{ maxWidth: '200px' }} />
                            <h3 className="fw-bold mt-2" style={{ color: '#800000', fontFamily: 'serif' }}>Acesse sua conta</h3>
                        </section>
 
                        {/* Container de Alertas Dinâmicos */}
                        {erro && <div className="alert alert-danger alert-custom alert-dismissible fade show" role="alert">{erro}</div>}
                        {sucesso && <div className="alert alert-success alert-custom alert-dismissible fade show" role="alert">{sucesso}</div>}
 
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label text-muted small fw-semibold">Nome de Usuário</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control input-elegante"
                                    placeholder="Seu usuário..."
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
 
                            <div className="mb-4">
                                <label htmlFor="senha" className="form-label text-muted small fw-semibold">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    className="form-control input-elegante"
                                    placeholder="Sua senha..."
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </div>
 
                            <div className="d-grid gap-3 mt-4">
                                <button type="submit" className="btn btn-primario-elegante w-100 py-2 fw-bold" disabled={loading}>
                                    {loading ? 'Entrando...' : 'Entrar'}
                                </button>
 
                                <div className="text-center mt-2">
                                    <span className="text-muted small">Não possui uma conta? </span>
                                    <Link to="/cadastrousuario" className="text-decoration-none fw-bold" style={{ color: '#800000' }}>
                                        Cadastre-se aqui.
                                    </Link>
                                </div>
                                <div className="text-center mt-2">
                                    <span className="text-muted small">Deseja recuperar a senha? </span>
                                    <Link to="/recuperarsenhausuario" className="text-decoration-none fw-bold" style={{ color: '#800000' }}>
                                        Recuperar a senha
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
 
                <div className="col-md-6 bg-dark d-none d-md-flex justify-content-center align-items-center p-0" style={{ overflow: 'hidden' }}>
                    <img src={logoCadastro} alt="Bolo Encantado" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 0.9 }} />
                </div>
            </div>
        </div>
    );
};
 
export default LoginUsuario;