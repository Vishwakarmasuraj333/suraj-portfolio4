import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const username = "Vishwakarmasuraj333";

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Suraj-Vishwakarma-Portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.allSettled([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    let userJson: any = null;
    let reposJson: any = [];

    if (userRes.status === "fulfilled" && userRes.value.ok) {
      userJson = await userRes.value.json();
    }
    if (reposRes.status === "fulfilled" && reposRes.value.ok) {
      reposJson = await reposRes.value.json();
    }

    if (!userJson) {
      // Return honest cached fallback with rate limit note
      return NextResponse.json({
        isLive: false,
        message: "GitHub rate limit exceeded or API currently unreachable",
        data: {
          username: "Vishwakarmasuraj333",
          profileUrl: `https://github.com/${username}`,
          publicRepos: 3,
          avatarUrl: "https://avatars.githubusercontent.com/u/120610344?v=4", // Standard GitHub avatar
          bio: "Full Stack Developer | M.Sc. IT Student",
          recentRepos: [
            {
              name: "IntelliTwin-AI",
              description: "Cybersecurity Anomaly Detection Platform with FastAPI, Next.js, and XGBoost/SHAP explainability.",
              stars: 0,
              forks: 0,
              url: "https://github.com/Vishwakarmasuraj333/IntelliTwin-AI",
              language: "Python",
              updatedAt: new Date().toISOString(),
            },
            {
              name: "-Nexora-Social",
              description: "Centralized social media scheduling and post management dashboard.",
              stars: 0,
              forks: 0,
              url: "https://github.com/Vishwakarmasuraj333/-Nexora-Social",
              language: "TypeScript",
              updatedAt: new Date().toISOString(),
            },
          ],
        },
      });
    }

    const recentRepos = Array.isArray(reposJson)
      ? reposJson.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url,
          language: repo.language,
          updatedAt: repo.updated_at,
        }))
      : [];

    return NextResponse.json({
      isLive: true,
      data: {
        username: userJson.login,
        name: userJson.name || "Suraj Vishwakarma",
        publicRepos: userJson.public_repos,
        followers: userJson.followers,
        following: userJson.following,
        avatarUrl: userJson.avatar_url,
        profileUrl: userJson.html_url,
        bio: userJson.bio || "Full Stack Developer",
        recentRepos,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        isLive: false,
        error: "Failed to query GitHub API",
      },
      { status: 500 }
    );
  }
}

