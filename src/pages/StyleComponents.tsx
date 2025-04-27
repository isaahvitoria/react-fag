import { useEffect, useState } from "react";
import styled from "styled-components";

interface GithubUser {
  login: string;
  html_url: string;
  avatar_url: string;
}

interface GithubRepo {
  name: string;
  html_url: string;
}

const Container = styled.div`
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
`;

const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

const Login = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Button = styled.a`
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-decoration: none;
`;

const RepoList = styled.ul`
  text-align: left;
  list-style-type: disc;
  margin-top: 1rem;
  padding-left: 1.25rem;
`;

const RepoItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default function StyledComponents() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/isaahvitoria")
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch("https://api.github.com/users/isaahvitoria/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  if (!user) return <Container>Carregando...</Container>;

  return (
    <Container>
      <Card>
        <Avatar src={user.avatar_url} alt={user.login} />
        <Login>{user.login}</Login>
        <Button href={user.html_url} target="_blank">
          Ver Perfil
        </Button>
        <RepoList>
          {repos.map((repo) => (
            <RepoItem key={repo.name}>
              <a
                href={repo.html_url}
                target="_blank"
                style={{ color: "#3b82f6", textDecoration: "underline" }}
              >
                {repo.name}
              </a>
            </RepoItem>
          ))}
        </RepoList>
        <Button href="/">Voltar pra Home</Button>
      </Card>
    </Container>
  );
}
