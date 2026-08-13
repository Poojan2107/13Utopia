# Rollback

If this homepage takeover fails review:

```
git checkout 5e9804d -- src/app/page.tsx src/components/home/HeroStage.tsx src/components/home/WorkIndex.tsx src/components/home/WorkStageMedia.tsx
```

That restores the last pre-takeover home composition. Keep `docs/handover/` unless asked to revert the 2B lock. Do not force-push.
