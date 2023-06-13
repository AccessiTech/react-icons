export type Task = (name: string, fn: TaskFn) => Promise<void>;
export type TaskFn = () => Promise<void>;
export async function task(name: string, fn: TaskFn) {
  const start = performance.now();
  console.log(`================= ${name} =================\n`);
  await fn();
  const end = performance.now();
  console.log(`\n${name}: `, Math.floor(end - start) / 1000, "sec\n\n");
}

export default task;
