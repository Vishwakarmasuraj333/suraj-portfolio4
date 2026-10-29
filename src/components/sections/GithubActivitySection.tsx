"use client";

import React, { useEffect, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Github, Star, GitFork, ExternalLink, RefreshCw, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";

interface RepoItem {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
  language: string | null;
  updatedAt: string;
}

interface GithubData {
  username: string;
  name?: string;
  publicRepos: number;
  followers?: number;
  following?: number;
  avatarUrl: string;
  profileUrl: string;
  bio?: string;
  recentRepos: RepoItem[];
}

export function GithubActivitySection() {
  const [data, setData] = useState<GithubData | null>(null);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/github")
      .then((res) => res.json())
      .then((json) => {
        if (!isMounted) return;
        if (json.data) {
          setData(json.data);
          setIsLive(Boolean(json.isLive));
          if (!json.isLive && json.message) {
            setNotice(json.message);
          }
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setLoading(false);
        setNotice("Public GitHub API offline or unreachable");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Activity"
          title="Open Source & Repositories"
          subtitle="Real-time GitHub activity and open source code repositories from @Vishwakarmasuraj333."
        />

        {/* Live Status indicator */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-500/15">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isLive ? "bg-emerald-400 animate-pulse" : "bg-gold-400"
              }`}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-ivory-200">
              {isLive
                ? "Live GitHub Feed Connected"
                : "Cached Repository Reference"}
            </span>
          </div>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-gold-400 hover:text-ivory-100 flex items-center gap-1.5 transition-colors"
          >
            <span>@Vishwakarmasuraj333</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {notice && (
          <div className="mb-6 p-3 rounded-lg bg-maroon-900/50 border border-gold-500/20 text-xs text-gold-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-44 rounded-xl bg-maroon-900/40 border border-gold-500/10 p-6"
              />
            ))}
          </div>
        )}

        {/* Repositories Cards */}
        {!loading && data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.recentRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-gradient-to-b from-maroon-900/70 to-maroon-950 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl shadow-maroon-950/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20 group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-mono text-gold-400/90 flex items-center gap-1">
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-ivory-100 font-medium group-hover:text-gold-300 transition-colors mb-2">
                    {repo.name}
                  </h4>

                  <p className="text-xs text-ivory-300/80 line-clamp-3 leading-relaxed font-light mb-4">
                    {repo.description || "Public software engineering repository and source code."}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-[11px] font-mono text-ivory-300/70">
                  <span className="text-gold-400">
                    {repo.language || "TypeScript"}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold-400" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-gold-400" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

