import { Stack, StackProps, aws_ecs as ecs, aws_ecs_patterns as ecsPatterns, aws_ecr as ecr } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class TalentScoutStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const cluster = new ecs.Cluster(this, 'Cluster');

    new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Fargate', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('node:18'),
      },
      desiredCount: 1,
    });
  }
}
