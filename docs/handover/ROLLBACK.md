# Rollback

If this home pass fails review:

```
git checkout fbc7af2 -- src/app/page.tsx src/components/home/HeroStage.tsx src/components/home/WorkIndex.tsx src/components/home/WorkStageMedia.tsx
```

Keep `docs/handover/` (locks stay). Do not revert docs with the UI rollback unless asked.
