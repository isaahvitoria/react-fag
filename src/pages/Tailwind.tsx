import { useEffect, useState } from "react";

interface GithubUser {
  login: string;
  html_url: string;
  avatar_url: string;
}

interface GithubRepo {
  name: string;
  html_url: string;
}

export default function Tailwind() {
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

  if (!user) return <div className="p-4">Carregando...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm text-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{user.login}</h2>
        <a
          href={user.html_url}
          target="_blank"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Ver Perfil
        </a>
        <div className="text-left">
          <h3 className="font-semibold mb-2">Repositórios:</h3>
          <ul className="list-disc list-inside">
            {repos.map((repo) => (
              <li key={repo.name}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Voltar pra Home
        </a>
      </div>
    </div>
  );
}
